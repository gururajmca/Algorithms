const F20Sec = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
          // reject('Done');
          throw new Error('Hi')
        }, 2000); // this will get resolved after 2 seconds
    });
}

const aysncFunc = async ()=> {
  console.log('Inside aysncFunc');
  try {
    const res = await F20Sec();
    console.log('Got the result for F20Sec', res);
  } catch {
    console.log('Catched !!!!');
  }
}

aysncFunc();
