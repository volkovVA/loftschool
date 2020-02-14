import Vue from "vue";

const btns = {
    template: "#slider-button",
    props: ["currentIndex", "worksLength"]  
};

const preview = {
    template: "#slider-preview",
    props: ["works", "currentWork", "currentIndex"],
    computed: {
        translate() {
            const step = 100 / this.works.length;
            if (this.currentIndex >= this.works.length - 1) return;
            else if (this.currentIndex < 3) return 0;
            else if (this.currentIndex >= 3) return step * (this.currentIndex - 2);
        }
    }
};

const display = {
    template: "#slider-display",
    components: {
        preview, btns
    },
    props: ["works", "currentWork", "currentIndex"],
    methods: {
        handleSlide(direction) {
            this.$emit('slide', direction);
        }
    }
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
    watch: {
        currentIndex(value) {
            this.updateCurrentIndex(value);
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
            switch(direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
                default:
                    this.currentIndex = direction;
                    break;    
            }            
        },
        updateCurrentIndex(value) {
            if (value >= this.works.length - 1) {
                this.currentIndex = this.works.length - 1;
            } else if (value <= 0) this.currentIndex = 0;
        },
        // makeInfiniteLoopForIndex(value) {
        //     const worksAmountComputedCounted = this.works.length - 1;
        //     if (value > worksAmountComputedCounted) this.currentIndex = 0;
        //     if(value < 0) this.currentIndex = worksAmountComputedCounted;
        // },
    },
    // watch: {
    //     currentIndex(value) {
    //         this.makeInfiniteLoopForIndex(value)
    //     }
    // },
    created() {
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequiredImages(data);
    }
})