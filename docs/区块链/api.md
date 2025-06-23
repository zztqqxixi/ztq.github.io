---
title: 用户管理API
sidebar_label: 用户API
description: 用户注册、登录、权限管理等接口文档
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 用户登录

`POST /api/v1/login`

**请求参数**:

| 参数名 | 类型   | 必填 | 说明       |
|--------|--------|------|------------|
| username | string | 是   | 用户名     |
| password | string | 是   | 密码       |

**示例代码**:
```
package com.qiqi.tlias.pojo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    private Integer id;
    private String name;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
```
