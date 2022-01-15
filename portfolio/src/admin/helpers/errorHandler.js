export const generateStdError = (errorObj) => {
  const errorResponseObject = errorObj.response.data;

  if (errorResponseObject.message) {
    switch (errorResponseObject.message) {
      case 'The given data was invalid.':
        throw new Error('Ошибка валидации');
      default:
        throw new Error(errorResponseObject.message);
    }
  }

  if (errorResponseObject.error) {
    switch (errorResponseObject.error) {
      case 'token_not_provided':
        throw new Error('Токен авторизации не предоставлен');
      case 'token_expired':
        throw new Error('Токен авторизации просрочен');
      default:
        throw new Error(errorResponseObject.error);
    }
  }
};
