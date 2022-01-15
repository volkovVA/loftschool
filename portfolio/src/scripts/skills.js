import Vue from "vue";
import axios from "axios";

const skill = {
    template: "#skill__wrapper",
    props: {
        skill: Object
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            const percent = (dashArray / 100) * (100 - this.skill.percent);
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
    async created() {
        // const data = require("../data/skills.json");
        const {data} = await axios.get(`${process.env.BASE_URL}/categories/${process.env.USER_ID}`);
        this.skills = data;
    }
});
