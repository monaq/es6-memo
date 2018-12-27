import Letters from './Letters';
import View from './View';

const createApp = () => {
    class App {
        constructor() {
            this.letter = new Letters();
            this.view = new View({
                app: '#wrap',
                events: {
                    onSubmit: this.onAddLetter.bind(this),
                }
            });
            this.letter._subscribe(this.onLetterUpdate.bind(this));
        }
        onAddLetter(e) {
            this.letter.addLetter(
                this.letter.letterFactory({
                    title: e.inputText,
                    category: e.category
                })
            )
        }
        onLetterUpdate () {
            this.view.renderItem(this.letter.getItems());
        }
    }

    const newApp = new App();
}

export default createApp;