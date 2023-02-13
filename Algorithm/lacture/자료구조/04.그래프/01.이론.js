"use strict";
// 🔴 그래프 🔴
// - 정점과 정점간의 간선으로 이루어진 비선형 자료구조
// - 인물 관계도 생각하면 편함.!
// - ❗️ 지하철 노선도 ❗️
// - 정점은 각 지하철 역
// - 간선은 지하철 이동시간!
// - ❗️ 페이지 랭크 ❗️

// 특징
// 1. 하나의 정점은 여러개의 간선을 가질 수 있다.
// 2. 방향 그래프와 무방향 그래프로 나뉠 수 있다.
// 3. 간선은 가중치를 가질 수 있다.
// 4. 사이클이 발생할 수 있다.

// 종류
// 무방향 그래프 : 방향이 존재하지 않아 (a, b) === (b, a)같다.
// - a에서 b로도 이동이 가능하고 b에서 a로도 이동이 가능하다.

// 방향 그래프 : 정해진 가야만하는 방향이 있다.
// - 반대로는 갈 수 없음.
