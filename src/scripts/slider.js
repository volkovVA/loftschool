import Vue from "vue";

const preview = {
    template: "#slider-preview",
    props: ["works", "currentWork"]
};

const btns = {
    template: "#slider-button"
};

const display = {
    template: "#slider-display",
    components: {
        preview, btns
    },
    props: ["works", "currentWork"],
    // computed: {
    //     reversedWorks() {
    //         return [...this.works].reverse();
    //     }
    // }
};

const tags = {
    template: "#slider-tags",
    props: ["tags"]
};

const info = {
    template: "#slider-content",
    components: {
        tags
    },
    props: ["currentWork", "currentIndex"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ')
        }
    }
};

new Vue ({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display, info
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/slider/${item.photo}`);
                item.photo = requiredPic;
                return item;
            });
        },
        handleSlide(direction) {
            console.log(direction);
            switch(direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }            
        },
        makeInfiniteLoopForIndex(value) {
            const worksAmountComputedCounted = this.works.length - 1;
            if (value > worksAmountComputedCounted) this.currentIndex = 0;
            if(value < 0) this.currentIndex = worksAmountComputedCounted;
        },
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForIndex(value)
        }
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequiredImages(data);
    }
})