export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_PRO_FORM = 'SUBMIT_PRO_FORM';

export const submitForm = (data) => ({
  type: SUBMIT_FORM,
  data,
});

export const submitProForm = (data) => ({
  type: SUBMIT_PRO_FORM,
  data,
});
