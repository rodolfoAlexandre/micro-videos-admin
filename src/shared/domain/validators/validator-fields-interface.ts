export type FieldsErrors = {
    [field: string]: string[];
}

export interface IValidatorFields<PropsValidaded> {
    errors: FieldsErrors | null;
    validatedData: PropsValidaded | null;
    validate(data: any): boolean
}