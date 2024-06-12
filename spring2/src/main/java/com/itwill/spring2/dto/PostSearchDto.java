package com.itwill.spring2.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class PostSearchDto {
    private String keyword;
    private String category;

}
