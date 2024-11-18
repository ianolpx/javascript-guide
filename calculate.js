function calculateSum() {
    // input 값 가져오기
    let n = document.getElementById('inputNumber').value;
    n = Number(n);

    // 합계 계산
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;  // 합계에 i를 더함
    }

    // 결과 출력
    document.getElementById('result').innerText = `1부터 ${n}까지의 합계는 ${sum}임`;
}