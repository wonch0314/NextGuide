"use client";

import React from "react";

// MUI-X TreeView & TreeItem
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { FormControlLabel, Radio } from "@mui/material";

export default function page() {
  // Menu 리스트를 변수로 받아 TreeItem을 만드는 함수
  const menuList = [
    {
      menuId: "OM0000",
      menuNm: "1",
      children: [
        {
          menuId: "OM0100",
          menuNm: "1-1",
          children: [
            {
              menuId: "OM0110",
              menuNm: "1-1-1",
            },
          ],
        },
        {
          menuId: "OM0200",
          menuNm: "1-2",
          children: [
            {
              menuId: "OM0210",
              menuNm: "1-2-1",
            },
          ],
        },
      ],
    },
    {
      menuId: "BS0000",
      menuNm: "2",
      children: [
        {
          menuId: "BS0100",
          menuNm: "2-1",
          children: [
            {
              menuId: "BS0110",
              menuNm: "2-1-1",
            },
          ],
        },
      ],
    },
  ];
  const renderTree = (menu) => {
    return (
      <TreeItem
        key={menu.menuId}
        itemId={menu.menuId}
        // label에 TreeItem에 들어갈 Item을 입력한다.
        label={
          <div
            // 이벤트 버블링 방지 & 클릭시 메뉴의 세부 정보 불러오기
            onClick={(e) => e.stopPropagation()}
          >
            {menu.menuId} {menu.menuNm}
          </div>
        }
      >
        {/** menu에 Children이 있다면 mapping 하여 renderTree 함수 반복 */}
        {menu.children ? menu.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  return (
    <div className="tree-wrap">
      <div className="filter-area">
        <FormControlLabel control={<Radio />} label="전체 메뉴" />
      </div>
      <div className="conbox-area h-full">
        <SimpleTreeView
          id="my-tree"
          aria-label="file system navigator"
          slot={
            {

              defaultCollapseIcon: <p>-</p>,
              defaultExpandIcon:<p>+</p>,
              defaultEndIcon: "└",
              selected: true
            }
          }
        >
          {menuList.map((menu) => renderTree(menu))}
        </SimpleTreeView>
      </div>
    </div>
  );
}
