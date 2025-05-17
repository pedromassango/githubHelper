function hideFloatingBox() {
    const container = document.getElementById('floating-comment-box');
    if (container) {
        container.remove();
    }

}

function createFloatingBox(originalCommentBox) {
    const container = document.createElement('div');
    container.id = 'floating-comment-box';
    container.innerHTML = `
    <div id="floating-header">
      💬 Comment
      <span id="floating-close" style="float:right;cursor:pointer;">✕</span>
    </div>
  `;
    container.appendChild(originalCommentBox);
    document.body.appendChild(container);

    // Close handler
    document.getElementById('floating-close').onclick = () => {
        container.remove();
        document.querySelector('.js-comment-field').parentElement.style.display = '';
    };

    // Make it draggable
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    const header = document.getElementById('floating-header');
    header.onmousedown = (e) => {
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
    };

    document.onmouseup = () => isDragging = false;
    document.onmousemove = (e) => {
        if (isDragging) {
            container.style.left = `${e.clientX - offsetX}px`;
            container.style.top = `${e.clientY - offsetY}px`;
        }
    };
}

function floatGitHubCommentBox() {
    // For issue thread.
    // This currently doesn't work
    // const issueForm = document.querySelector('.MarkdownEditor-module__container--LVNU1');;
    const commentBoxContainer = document.querySelector('.js-new-comment-form')

    const commentAvatar = document.querySelector('.timeline-comment-avatar');

    if (document.getElementById('floating-comment-box')) {
        document.getElementById('floating-comment-box').remove();
    }
    if (commentBoxContainer) {
        if (commentAvatar) {
            commentAvatar.style.display = 'none';
        }
        createFloatingBox(commentBoxContainer);

    }
}

function waitForGitHubCommentForm(attempts = 20) {
    // For issue thread.
    // This currently doesn't work
    // const issueForm =  document.querySelector('.MarkdownEditor-module__container--LVNU1');
    const form = document.querySelector('.js-new-comment-form');

    if (!form) {
        console.log("Form is not valid");
    }

    if (form) {
        hideFloatingBox();
        floatGitHubCommentBox();
    } else if (attempts > 0) {
        console.log("setTimeout");
        setTimeout(() => waitForGitHubCommentForm(attempts - 1), 500);
    }
}

function observeGitHubThreadChanges() {
    let currentUrl = location.href;
    const isThread = /^https:\/\/github\.com\/.+\/(issues|pull)\/\d+/.test(currentUrl);

    if (isThread) {
        hideFloatingBox();
        waitForGitHubCommentForm();
    }

    const observer = new MutationObserver(() => {
        if (location.href !== currentUrl) {
            currentUrl = location.href;
            hideFloatingBox();

            const isThread = /^https:\/\/github\.com\/.+\/(issues|pull)\/\d+/.test(currentUrl);
            if (isThread) {
                waitForGitHubCommentForm();
            }
        }
    });

    observer.observe(document.body, {childList: true, subtree: true});
}

(() => {
    observeGitHubThreadChanges();
})();
