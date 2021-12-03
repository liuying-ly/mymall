import { request } from "./request";

export function getHomeMultiData() {
  return request({
    url: "/test/index",
    method: "GET"
  });
}