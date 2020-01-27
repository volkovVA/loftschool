import Vue from "vue";

const preview = {
    template: "#slider-preview"
};

const btns = {
    template: "#slider-button"
};

const display = {
    template: "#slider-display",
    components: {
        preview, btns
    }
};

const tags = {
    template: "#slider-tags"
};

const info = {
    template: "#slider-content",
    components: {
        tags
    }
};

new Vue ({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display, info
    }
})