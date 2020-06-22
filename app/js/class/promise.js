{
    //基本定义
    let ajax = function(callback){
        console.log('执行');
        setTimeout(function(){
            callback&&callback.call();
        },1000)
    };
    ajax(function(){
        console.log('timeout1');
    });
}

{
    let ajax = function(){
        console.log('2');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        })
    };
    ajax().then(function(){
        console.log('promise','timeout2');
    })
}


{
    let ajax = function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        });
    };
    ajax()
        .then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },2000);
        });
    })
        .then(function(){
        console.log('timeout3');
    })

}

{
    //所有图片加载完在添加到页面
    let loadImg = (src) => {
        return new Promise((resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(img);
            };
        })

    }

    let showImgs = (imgs) => {
        imgs.forEach((img) => {
            document.body.appendChild(img);
        })
    }
    /**
     * Promise.all
     * @return Promise 实例
     * @param Promise 实例组成的数组
     * 当参数中的所有 Promise 的状态都发生改变时，才触发新的 Promise 实例返回。
     */

    Promise.all([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590656173635&di=7b7bdb235d1dd92360007c6169788c26&imgtype=0&src=http%3A%2F%2Fugc.dls.migudm.cn%2FClient%2Fimage%2F060000225232%2Fugc_PIC_URL_720_406_664d7b0badd34dec890fcb371414cb6c.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590656225067&di=1b3d669bdf5979f80e0e6e6c81ec3aae&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F20%2F20181220133504_opkbg.thumb.700_0.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590656225066&di=d0c089219751fb6667e9869a50279a96&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FJG7MhQraHN%3DYGcNqqy%3D3Bt87sX4m7txceleufrWR3ez9p1535771048281compressflag.jpg')
    ]).then(showImgs)
}

{
    //有图片加载完在添加到页面
    let loadImg = (src) => {
        return new Promise((resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(img);
            };
        })

    }

    let showImgs = (img) => {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    /**
     * Promise.race
     * @return Promise 实例
     * @param Promise 实例组成的数组
     * 当参数中有一个 Promise 的状态率先改变，则新的 Promise 实例就会被触发， 其他的不再响应。
     */
    Promise.race([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590656173635&di=7b7bdb235d1dd92360007c6169788c26&imgtype=0&src=http%3A%2F%2Fugc.dls.migudm.cn%2FClient%2Fimage%2F060000225232%2Fugc_PIC_URL_720_406_664d7b0badd34dec890fcb371414cb6c.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590656225067&di=1b3d669bdf5979f80e0e6e6c81ec3aae&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F20%2F20181220133504_opkbg.thumb.700_0.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590656225066&di=d0c089219751fb6667e9869a50279a96&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FJG7MhQraHN%3DYGcNqqy%3D3Bt87sX4m7txceleufrWR3ez9p1535771048281compressflag.jpg')
    ]).then(showImgs)

    
}