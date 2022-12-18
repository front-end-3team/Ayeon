const musicListData = [
    {
        src: '../assets/img/iu_0.jpg',
        color: ['#0272a4', '#f6a564'],
    },
    {
        src: '../assets/img/iu_1.jpg',
        color: ['#b6bfc8', '#36595b'],
    },
    {
        src: '../assets/img/iu_2.jpg',
        color: ['#e58e82', '#6f569f'],
    },
];

// 요소 정리
/*
1. .list_btn_group > ul
    - li 태그의 자식 요소로 이미지를 갖고
    - 해당 ul의 자식으로서 추가

2. .list_btn_group > button:first-child
   .list_btn_group > button:last-child
    p.s let currentPlayIndex = 0;

3. .disk_inner
    - 선택된 노래가 바뀔 때마다 디스크 내부의 원은 바뀐다

4. main
    - 선택된 노래가 바뀔 때마다 배경화면이 바뀐다
    - 선택된 노래가 실행되면 배경 이미지로 바뀐다
    p.s let playStatus = 0(false);

5. .disk
    - 애니메이션을 추가해야 할 disk 태그
    - active 클래스를 주면 disk가 돌게 되어 있음

6. .play_btn_group > button:first-child
   .play_btn_group > button:last-child

    * play 버튼이 눌러졌을 때 배경화면이 그라데이션에서
      앨범 이미지로 변경 및 디스크 회전

    * 중지 버튼이 눌러지면 디스크 회전 중지 및
      배경화면 그라데이션으로 변경

7. 생성된 ul의 li의 이미지태그를 가지고 올 것이다.

    * 현재 선택된 노래의 focus
      흰색 테두리 + 크기 커짐

    + 이미지 눌렀을 때도 이동 가능

*/
