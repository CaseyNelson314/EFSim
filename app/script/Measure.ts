
// 関数の実行時間を計測する関数
// 実行にかかった時間をミリ秒で出力
export const Measure = (name: string, func: Function) => {
    const start = performance.now();
    func();
    const end = performance.now();

    console.log(`${name}: ${Math.floor(end - start)}ms`);
}