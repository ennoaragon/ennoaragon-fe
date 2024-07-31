function loadTheme() {
//    const lightSwitches = document.querySelectorAll('.light-switch');
    console.log("loadTheme");
    if (localStorage.getItem('dark-mode') === 'true' || (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark');
    } else {
        document.querySelector('html').classList.remove('dark');
    }
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

        // Load the preferred theme on page load
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            body.classList.add('dark');
        }
    // Toggle theme and store preference
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark');
            if (body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.removeItem('theme');
            }
        });
//    lightSwitches.forEach((lightSwitch, i) => {
//        if (localStorage.getItem('dark-mode') === 'true') {
//            lightSwitch.checked = true;
//        }
//        lightSwitch.addEventListener('change', () => {
//            const { checked } = lightSwitch;
//            console.log("here", checked);
//            lightSwitches.forEach((el, n) => {
//                if (n !== i) {
//                    el.checked = checked;
//                }
//            });
//            if (lightSwitch.checked) {
//                document.documentElement.classList.add('dark');
//                localStorage.setItem('dark-mode', true);
//            } else {
//                document.documentElement.classList.remove('dark');
//                localStorage.setItem('dark-mode', false);
//            }
//        });
//    });
}
