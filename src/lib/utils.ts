export function parseDateAsUtc(date: string) {
    return new Date(`${date.trim()}+0000`);
}

function formatDateTime(date: Date, options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat('de-DE', options).format(date);
}

export function formatDate(date: Date) {
    return formatDateTime(date, { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatTime(date: Date) {
    return formatDateTime(date, { hour: 'numeric', minute: 'numeric' });
}
