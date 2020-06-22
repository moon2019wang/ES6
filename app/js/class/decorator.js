{
    /**
     * readOnly 就是一个 decorator 装饰器
     * @param {修饰的类} target 
     * @param {类的属性名} name 
     * @param {属性的描述器} descriptor 
     * 用修饰符的方式调用
     */
    let readonly = (target,name,descriptor) => {
        descriptor.writable = false;
        //return descriptor
    }

    class Test{
        @readonly
        time() {
            return '2017-03-11';
        }
    }

    let test = new Test();
    // test.time = () => {
    //     console.log('reset time'); 
    // } // index.js:1 Uncaught TypeError: Cannot assign to read only property 'time' of object
    console.log(test.time());

}

// 用修饰器的方式为类增加静态属性
{
    let typeName = (target,name,descriptor) => {
        target.myname = 'hello';
    }

    @typeName
    class Test{

    }

    console.log('类修饰符',Test.myname);
}

// 第三方库修饰器的 js 库 core-decorators; npm install core-decorators

// 应用：为广告做一个日志统计，如展示的日志和点击的日志。
{
    let log = (type) => {
        return (target,name,descriptor) => {
            // 修改函数的运行方式
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target,arg); // 先执行属性函数本身的代码
                console.log(`log ${type}`);
            }
        }
    }

    class AD{

        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();

}