import { IsOptional, IsString } from "class-validator";

class SentimentDto {
    @IsOptional()
    @IsString()
    public sentence: string;
}

export default SentimentDto;
