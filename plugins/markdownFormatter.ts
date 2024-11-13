
export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatMarkdown: (text: string) => {
                text = text.replace(/\*\*([^\*]+)\*\*/g, '<em>$1</em>');
                text = text.replace(/_([^_]+)_/g, '<b>$1</b>');
                text = text.replace(/!\[(.*)\]\((.*)\)/g, '<a href="$2" target="_blank">$1</a>');
                return text;
            }
        }
    }
});
