import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MatchValidator(fieldName: string, matchingFieldName: string) {
    return (returnGroup: FormGroup) => {
        const field = returnGroup.controls[fieldName];
        const matchingField = returnGroup.controls[matchingFieldName];

        // set error on matchingControl if validation fails
        if (field.value !== matchingField.value) {
            matchingField.setErrors({ mustMatch: true });
        } else {
            matchingField.setErrors(null);
        }
    }
}