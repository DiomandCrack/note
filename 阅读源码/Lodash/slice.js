/**
 * 从数组中创建一个包含起始位置但不包含结束位置的切片
 * 就是还原 Array.prototype.slice()
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */
//这一个slice里有很多概念
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  /*这两个是很有意思的 start为null或者undefined就为0 但是end为什么是严格等于
  * undefined???
  * 设一个数组arr = [1,2,3,4]
  * 1. Number(null) = 0 所以 null - null = 0
  *   arr.slice(null,null) 相当于 arr.slice(0,0)
  *   所以返回值为空数组[]
  *   _.slice(arr,null,null)同理
  * 
  * 2.end === undefined相当于没传
  *   Array.prototype.slice() 没传第二个值相当于从start一直截到数组的最末尾
  *   arr.slice(null,undefined) //[1,2,3,4] 相当于arr.slice(0)
  *   arr.slice(undefined,undefined) //[1,2,3,4] 相当于arr.slice()
  *   所以同理
  *   _.slice(arr,null,undefined) //[1,2,3,4]
  *   _.slice(arr,undefined,undefined)//[1,2,3,4]
  */
  start = start == null ? 0 : start
  end = end === undefined ? length : end


  if (start < 0) {
    /*这句也很精炼啊
    * if(-arr.length<start<0){
    *   start = arr.length + start
    * }else if(start<-arr.length){
    *   start = 0
    * }
    */
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }

  /**
   * >>>无符号右移
   * 向下取整 跟~~类似
   */
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  /**
   * 返回一个新的数组
   */
  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export default slice