import $ from 'jquery';
import Template from './Template';

class View {
    constructor(options) {
        this.options = options;
        this.$app = $(this.options.app);
        this.$form = this.$app.find('.form-area form');
        this.$inputText = this.$form.find('textArea');
        this.$category = this.$form.find('select');
        this.$listArea = this.$app.find('#listArea');

        this.bindEvent()
    }

    bindEvent() {
        var self = this;

        this.$form.on('submit', (e) => {
            var payload = {
                event: e,
                inputText: self.$inputText.val(),
                category: self.$category.val()
            };

            e.preventDefault();

            if(!payload.inputText) {
                return alert('내용을 입력해주세요');
            }
            self.options.events.onSubmit(payload);
            self.renderInputs('', 1);
        })
    }

    renderInputs(textInput, categoryInput) {
        this.$inputText.val(textInput);
        this.$category.val(categoryInput);
    }

    renderItem(items) {
        const orderItems = items.reverse();
        const template = orderItems.map(data => Template(data));
        this.$listArea.html(template);
    }


}

export default View