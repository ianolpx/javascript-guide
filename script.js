function testVar() {
    if (true) {
        var x = 10;  // 블록({ }) 안에서 선언
    }
    console.log(x);  // 10 출력됨 (블록 스코프 무시)
}

testVar();