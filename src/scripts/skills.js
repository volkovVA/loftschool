import Vue from "vue";

const skill = {
    template: "#skill__wrapper",
    props: ["skillName", "skillPercent"],
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            const percent = (dashArray / 100) * (100 - this.skillPercent);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawColoredCircle();
    }
};

const skillsRow = {
    template: "#skills__row",
    components: {
        skill
    },
    props: ["skill"]
};

new Vue({
    el: "#skills-component",
    template: "#skills-container",
    data() {
        return {
            skills: []
        };
    },
    components: {
        skillsRow
    },
    created() {
        const data = require("../data/skills.json");
        this.skills = data;
    }
});
