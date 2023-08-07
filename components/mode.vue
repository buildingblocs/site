<template>
    <span class="ml-3 mr-3">
        <button @click="toggle" type="button"
            class="inline-flex items-center rounded-md  px-3.5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:shadow-sm hover:bg-gray-50 hover:bg-opacity-50 dark:hover:bg-opacity-50 dark:hover:bg-slate-800">
            <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="h-5 w-5 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg v-else-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="h-5 w-5 text-gray-300">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="h-5 w-5 text-gray-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        </button>
    </span>
</template>
<script>
export default {
    data() {
        return {
            theme: ""
        };
    },
    mounted() {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            this.theme = storedTheme;
        }
    },
    methods: {
        toggle() {
            if (this.theme === "light") {
                this.theme = "dark";
            } else if (this.theme === "dark") {
                this.theme = "system";
            } else {
                this.theme = "light";
            }
            if (this.theme === "system") {
                localStorage.removeItem("theme"); // Remove the stored theme
                this.$colorMode.preference = "system"; // Use the system preference
            } else {
                localStorage.setItem("theme", this.theme); // Store the selected theme in localStorage
                this.$colorMode.preference = this.theme; // Set the color mode to the selected theme
            }
        }
    }
};
</script>