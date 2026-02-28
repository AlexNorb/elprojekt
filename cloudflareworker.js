// Vi använder fetch direkt istället för SDK:n i dashboard-editorn 
// för att slippa krångel med externa bibliotek i webbgränssnittet.

export default {
    async fetch(request, env) {
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*", // Byt till din GitHub Pages-URL för högre säkerhet
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        if (request.method === "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        if (request.method === "POST") {
            try {
                const body = await request.json();

                // Formatera mailets HTML-innehåll med all data från formuläret
                const htmlContent = `
                  <h2>Ny förfrågan via hemsidan</h2>
                  <p><strong>Ärende:</strong> ${body.serviceType || 'Ej angivet'}</p>
                  <p><strong>Namn:</strong> ${body.name || 'Ej angivet'}</p>
                  <p><strong>E-post:</strong> ${body.email || 'Ej angivet'}</p>
                  <p><strong>Telefon:</strong> ${body.phone || 'Ej angivet'}</p>
                  <br>
                  <p><strong>Meddelande:</strong></p>
                  <p>${(body.message || '').replace(/\n/g, '<br>')}</p>
                `;

                // Bygg Resend-payloaden
                const resendPayload = {
                    from: "onboarding@resend.dev", // Byt till din verifierade domän i Resend
                    to: "allecc@gmail.com",
                    subject: `Kontakt från ${body.name || 'Webbsidan'} - ${body.serviceType || 'Förfrågan'}`,
                    html: htmlContent,
                    ...(body.email && { reply_to: body.email }),
                };

                // Om attachments bifogades (base64 från frontend), lägg till dem
                if (body.attachments && Array.isArray(body.attachments) && body.attachments.length > 0) {
                    resendPayload.attachments = body.attachments;
                }

                // Anrop till Resend API
                const res = await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(resendPayload),
                });

                const result = await res.json();

                return new Response(JSON.stringify(result), {
                    status: res.status,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                });

            } catch (err) {
                return new Response(JSON.stringify({ error: err.message }), {
                    status: 500,
                    headers: corsHeaders,
                });
            }
        }

        return new Response("Method not allowed", { status: 405 });
    },
};