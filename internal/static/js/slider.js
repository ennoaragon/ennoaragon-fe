console.log("slider.js loaded");
//const images = JSON.parse(document.getElementById('imageItems').textContent)
export default function slider(){
    console.log("slider() function called");
    return {
        skip: 1,
        slider: null,
        activeSlide: 0, //actice slide index for the rotation
        total: null,
        interval: 3000,
        autoplay: true,
        direction: 'right',
        slides: images,
        init() {
    //        this.$nextTick(() => {
    //            this.total = this.$refs.slider.children.length;
    //        });
            if(images.length === 0) {
                console.error('No images found fatal error!');
                return;
            }
            console.log("images.length: ", images.length);
            console.log("i have beeen called");

            this.total = images.length;
            this.slider = images;

            if(this.autoplay) {
                this.play();
            }
        },
        next() {
            ///this.to((current, offset) => current + (offset * this.skip))
           this.activeSlide = this.activeSlide === this.slides.length -1 ? 0 : this.activeSlide + 1
        },
        prev() {
            //this.to((current, offset) => current - (offset * this.skip))
            this.activeSlide = this.activeSlide === 0 ? this.slides.length-1 : this.activeSlide - 1
        }, 
        to(strategy) {
            let slider = this.$refs.slider
            let current = slider.scrollLeft
            let offset = slider.firstElementChild.getBoundingClientRect().width

            slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })
        },
        play() {
            // run every this.interval milliseconds
            let interval = setInterval(() => {
                // check if direction is right and click next
                if(this.direction === 'right') {
                    this.next();
                }
                // check if direction is left and click prev
                if(this.direction === 'left') {
                    this.prev();
                }
                // check if counter is equal to total and change direction to left
                if(this.active  == this.total) {
                    this.direction = 'left';
                }
                // check if counter is equal to 1 and change direction to right
                if (this.active  == 0) {
                    this.direction = 'right';
                }

            }, this.interval);

            console.info('Interval started', interval);

        },
        focusableWhenVisible: {
            'x-intersect:enter'() {
                this.$el.removeAttribute('tabindex')
            },
            'x-intersect:leave'() {
                this.$el.setAttribute('tabindex', '-1')
            },
        }
    }
}
