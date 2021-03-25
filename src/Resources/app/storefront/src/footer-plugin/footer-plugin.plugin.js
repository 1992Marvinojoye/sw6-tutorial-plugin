import Plugin from 'src/plugin-system/plugin.class';

export default class FooterPlugin extends Plugin {
    init() {
        this.el.onclick = () => {
            this.el.classList.toggle('active');
        }
    }
}