import FooterPlugin from './footer-plugin/footer-plugin.plugin';

console.log('main.js geladen!');

const PluginManager = window.PluginManager;
PluginManager.register('FooterPlugin', FooterPlugin, '.tut-footer');