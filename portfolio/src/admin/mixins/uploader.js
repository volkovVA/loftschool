import { mapActions } from 'vuex';
import { renderer, getAbsoluteImgPath } from '../helpers/pictures';

export default {
  props: {
    value: {
      type: File | String,
      default: null,
    },
    maxSize: {
      type: Number,
      default: 2000000,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  watch: {
    value(value) {
      this.setRenderedPhoto();
    },
  },
  data() {
    return {
      renderedPhoto: null,
    };
  },
  methods: {
    ...mapActions('tooltips', ['showTooltip']),
    uploadFile() {
      this.$refs['file-input'].click();
    },
    setRenderedPhoto() {
      if (typeof this.value === 'string') {
        this.renderedPhoto = getAbsoluteImgPath(this.value);
      } else {
        if (this.value) {
          this.renderPhoto(this.value);
        } else {
          this.renderedPhoto = null;
        }
      }
    },
    async renderPhoto(file) {
      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
      } catch (error) {
        this.showTooltip({ type: 'error', text: error.message, duration: 3000 });
        this.$emit('input', null);
      }
    },
    async handlePhotoUpload(e) {
      const file = e.target.files[0];
      if (file.size > this.maxSize) {
        this.showTooltip({ type: 'error', text: 'Слишком большой размер файла (максимум 2MB)', duration: 3000 });
        return;
      }
      this.$emit('input', file);
    },
  },
  created() {
    this.setRenderedPhoto();
  },
};
