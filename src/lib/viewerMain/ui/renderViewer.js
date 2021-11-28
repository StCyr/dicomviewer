import renderStudyBrowser from './renderStudyBrowser';
import renderToolbar from './renderToolbar';
import renderViewport from './renderViewport';
import renderDialogs from './renderDialogs';

/**
 * Renders toolbar and actions
 */
export default function renderViewer() {
    renderStudyBrowser();
    renderToolbar();
    renderViewport();
    renderDialogs();
}
