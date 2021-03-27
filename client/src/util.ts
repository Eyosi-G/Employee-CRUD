export class DateFormat {
    static toYYYYMMDD(date:Date ):string{
        const YYYY = date.getFullYear();
        const MM =date.getMonth() + 1;
        const DD =date.getDate();
        return `${YYYY}-${Math.floor(MM/10) == 0 ? `0${MM}`:MM}-${Math.floor(DD/10) == 0 ? `0${DD}`:DD}`;
    }
    
}