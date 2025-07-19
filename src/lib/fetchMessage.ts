export async function fetchMessage(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Спробуйте замінити `true` на `false` для тесту помилки
      const shouldSucceed = true;

      if (shouldSucceed) {
        resolve("Привіт із Promise!");
      } else {
        reject(new Error("Не вдалося отримати повідомлення 😢"));
      }
    }, 2000);
  });
}
