---
title: 用户管理API
sidebar_label: 用户API
description: 用户注册、登录、权限管理等接口文档
tags: [RESTful, 认证]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 认证基础
所有接口需在Header中添加认证令牌：
```http
Authorization: Bearer <your_jwt_token>
```

:::note 权限说明
- 🔐 普通用户：仅能访问自己的数据
- ⚡ 管理员：可管理所有用户
:::

---

## 用户登录
`POST /api/v1/auth/login`

### 请求参数
| 参数名     | 类型   | 必填 | 示例值       | 说明         |
|------------|--------|------|-------------|--------------|
| username   | string | 是   | `admin`     | 用户名       |
| password   | string | 是   | `P@ssw0rd!` | 密码(8-20位) |

### 响应示例
<!-- <ApiSchema 
  response={{
    "code": 200,
    "data": {
      "token": "eyJhbGciOi...",
      "expires_in": 3600
    }
  }} 
/> -->

### 错误码
| 状态码 | 错误信息           | 解决方案               |
|--------|--------------------|------------------------|
| 401    | 用户名或密码错误   | 检查输入或联系管理员   |
| 429    | 请求过于频繁       | 30秒后重试            |

### 代码示例
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.example.com/auth/login' \
  -H 'Content-Type: application/json' \
  -d '{"username":"admin","password":"P@ssw0rd!"}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.post(
    "https://api.example.com/auth/login",
    json={"username": "admin", "password": "P@ssw0rd!"}
)
print(response.json())
```

</TabItem>
</Tabs>

---

## 获取用户信息
`GET /api/v1/users/{id}`

### 路径参数
| 参数名 | 类型   | 说明   |
|--------|--------|--------|
| id     | string | 用户ID |

### 响应字段
```ts
interface User {
  id: string;
  username: string;
  email: string;
  roles: ("admin" | "user")[];
  created_at: string; // ISO8601
}
```

### 示例请求
```http
GET /api/v1/users/u_123456789
Authorization: Bearer eyJhbGciOi...
```

---

## 高级功能
### 分页查询用户
`GET /api/v1/users`

#### 查询参数
| 参数名   | 类型    | 默认值 | 说明           |
|----------|---------|--------|----------------|
| page     | integer | 1      | 页码           |
| page_size| integer | 10     | 每页数量(1-100)|
| role     | string  | -      | 按角色过滤     |

#### 分页响应结构
```json
{
  "data": [],
  "pagination": {
    "total": 100,
    "current_page": 1,
    "per_page": 10
  }
}
```

:::tip
使用 `Prefer: count=exact` Header可获取精确总数（性能影响较大）
:::

---

## 附录
### 状态码说明
| 状态码 | 含义               |
|--------|--------------------|
| 200    | 成功               |
| 400    | 参数验证失败       |
| 401    | 未授权             |
| 403    | 权限不足           |
| 500    | 服务器内部错误     |

### 更新记录
| 版本 | 日期       | 变更说明               |
|------|------------|------------------------|
| v1.1 | 2023-08-01 | 新增分页查询接口       |
| v1.0 | 2023-05-15 | 初始版本               |