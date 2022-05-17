export const repeatInCaseOfError = async <T>(func: () => Promise<T>, ...props): Promise<T> => {
  try {
    return await func(...props);
  } catch (err) {
    await delay(100);
    return repeatInCaseOfError(func, ...props);
  }
}

export const delay = <T>(delayTime: number = 100, data?: any): Promise<T> =>
  new Promise<T>(resolve => setTimeout(() => resolve(data), delayTime));
