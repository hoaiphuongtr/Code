export const fetchUser = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: 'Hoai Phuong',
                    age: 21,
                    city: 'HCM'
                }
            });
        }, 1500);
    });
