
    /*
    创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
    */
    function compact(array) {
      return arr = array.filter((el) => {
        return el;
      })
    }

    console.log(compact([false, null, 0, "","xxx", undefined, NaN, 88, 96]));
