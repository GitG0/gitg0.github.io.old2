import '../assets/color-modes.js'

export default function ThemeSwitch (){
    return (
        <>
            <button type="button" data-bs-theme-value="light" aria-pressed="false">
              Light
            </button>
            <button type="button" data-bs-theme-value="dark" aria-pressed="true">
              Dark
            </button>
            <button type="button" data-bs-theme-value="auto" aria-pressed="false">
              Auto
            </button>
        </>
    )
}