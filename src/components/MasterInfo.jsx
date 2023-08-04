import React from "react";

export default function MasterInfo(props){
  const masterImg = props.masterImg
  const masterName = props.masterName;
  const masterStar = props.masterStar
  return(
    <div className="master-modal">
      <p className="master-title">우리 동네 000 기사님</p>
      <img src="" alt="" />
      <p className="master-name"> 기사님</p>
      <p className="master-star"> 점</p>
      <ul className="master-review">
        <li>
          <p>친절하셨어요. 수도 고장 접수했는데 꼼꼼하게 봐주셨습니다.</p>
        </li>
        <li>
          <p>손이 빠르십니다</p>
        </li>
        <li>
          <p>서비스로 전등을 갈아주심 굿</p>
        </li>
      </ul>
      <button>수리 상담하기</button>
    </div>
  )
}