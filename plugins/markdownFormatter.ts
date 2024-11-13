
export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatMarkdown: (text: string) => {
                text = text.replace(/\*\*([^\*]+)\*\*/g, '<em>$1</em>');
                text = text.replace(/_([^_]+)_/g, '<b>$1</b>');

                return text;
            }
        }
    }
});
