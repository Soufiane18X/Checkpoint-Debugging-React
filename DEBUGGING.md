# 🐛 Debugging Report

## 🔍 Tools Used
- React Developer Tools (Chrome Extension)

## 🔎 Issues Found & Fixed

### 1. Greeting Component
**Issue**: Greeting showed `Hello, undefined!`  
**Cause**: Incorrect prop passed (`username` instead of `user`)  
**Fix**: Changed `<Greeting username={user} />` to `<Greeting user={username} />`

### 2. Counter Component
**Issue**: Counter did not increment  
**Cause**: `setCount` was not passed as a prop  
**Fix**: Passed both `count` and `setCount` to `<Counter />`

## ✅ Final Status
All components are now working. Props and state are passed and updated correctly.