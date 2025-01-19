export const useExistEmptyFields = (...fields: any) => {
    let emptyField = false;
    fields.map((element: any) => {
        if (element === '' || element === null) {
            emptyField = true;
        }
    })
    return emptyField;
}