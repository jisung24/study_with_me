// 1. 자료구조 : 자료들을 메모리에 ❗️배치하는 방식❗️
// - ❗️ 자료들이 처리되는 과정이 자료 구조에 따라서 다르다 ❗️
// - 같은 삭제과정이라도 stack과 queue의 삭제과정은 다르다.

// 따라서 각 처리과정에 유리한 자료구조를 찾아서 구현하는 것이 훨씬 좋다.
// (삭제 삽입을 하는 경우, 배열보단 연결리스트를 사용하는 것이 좋다.)

// 2. 메모리
// - 컴퓨터의 메모리는 한 칸당 1byte(8bit)크기의 메모리 셀 여러 개로 구성된다.
// - 각각의(한 칸) 메모리는 고유 주소값을 지닌다.
// - 각 메모리에는 0과 1만 저장할 수 있다.
// - 한 칸은 1bit인데 컴퓨터는 무조건 1byte단위로 저장하고 읽는다.
// 즉 무조건 8bits단위로만 읽고 저장을 한다.
// - 강제로 8bit는 채운다는 의미임
// - ❗️1칸이 1bit인데 절대 못 읽지 그건.... => 숫자 10의 4번째 비트는? 이런거 없잖아.❗️
// ⭐️ 컴퓨터의 메모리는 한 칸이 1bit지만 읽고 저장할 수 있는 기본 단위는 1byte이다.(8칸)⭐️

// 2. 메모리에 값 할당 ( 역시 8bit or 그 이상 단위로 저장하고 읽음 )
// - 컴퓨터 ram은 0과 1밖에 저장하지 못 함.
// - 숫자 ( 4byte ) : int형
// - 문자 ( 1byte ) : char형  👉 숫자밖에 저장할 수 없기 때문에 해당 문자를 숫자로 매칭시켜놓은 ascii code를 사용한다.
// 리스트 ( array, linked list )
// - Array : 메모리 상에 1byte단위로 여러 개 ❗️연속적으로❗️ 할당이 된다.
// =====> array자료구조는 메모리상에서 어떤 구조로 되어있어? => 연속적인 구조로 되어있어.
// 그럼 작업 처리방식은 어떻게 되는데? : 배우면 돼!

// - Linked List : 자료들을 포인터로 연결을 시켜놓음 (연속적이게 저장은 안 됨, 흩어져서 저장이 됨.)
// ==> 숫자 칸(4byte) + 다음 노드 가리킬 주소 저장공간(4byte) => 한 노드 당 차지하는 공간이 많다..
