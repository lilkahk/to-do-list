import './content.css'

export default function createContent () {
    // Define
    const content = document.createElement('div');
    content.classList.add('content');

    const contentSide = document.createElement('div');
    contentSide.classList.add('content-side');

    const contentMain = document.createElement('div');
    contentMain.classList.add('content-main');

    const contentNotes = document.createElement('div');

    return content;
}