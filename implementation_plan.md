# Implementation Plan - Light Hero & Transparent Navbar

Refactoring the Hero section to use a light overlay with dark/primary text, and updating the Navbar to be transparent at the top for a seamless look.

## User Review Required

> [!NOTE]
> **Theme Change**: This completely inverses the Hero contrast from Dark (White text on Dark BG) to Light (Dark/Blue text on Light BG).
> **Navbar**: Navbar will be transparent at the top. Since the Hero is now Light, the existing dark navbar links will remain visible.

## Proposed Changes

### [MODIFY] [Hero.astro](file:///c:/GIT/elprojekt/src/components/Hero.astro)

1.  **Overlay**: Change from `slate-900` gradient to a `white` or `slate-50` gradient (`from-white/90 via-white/50 to-white/20`).
2.  **Typography**:
    *   **Headline**: Change `text-white` to `text-slate-900` (or `text-elblue` as requested). *Recommendation: Primary Blue for headline.*
    *   **Subhead**: Change `text-slate-200` to `text-slate-600`.
3.  **Buttons**:
    *   **Secondary**: Update styling to work on light background (e.g., dark border/text).

### [MODIFY] [Navbar.astro](file:///c:/GIT/elprojekt/src/components/Navbar.astro)

1.  **State Logic**: Add a `data-at-top` attribute or simple class transparency.
2.  **Scroll Script**: Update the scroll event listener to toggle:
    *   `bg-white`, `shadow-sm`, `border-gray-100` (When scrolled or menu open)
    *   `bg-transparent`, `shadow-none`, `border-transparent` (When at top)

## Verification Plan
1.  **Scroll Test**: Verify navbar becomes white when scrolling down.
2.  **Contrast**: Ensure text is readable against the background image with the new light overlay.
3.  **Mobile**: Verify mobile menu background remains solid white for readability.
