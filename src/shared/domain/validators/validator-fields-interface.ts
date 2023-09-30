export type FieldErrors = {
    [field: string]: string[];
}

export interface IValidatorFields<PropsValidaded> {
    errors: FieldErrors | null;
    validatedData: PropsValidaded | null;
    validate(data: any): boolean
}