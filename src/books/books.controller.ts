import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll(@Req() request: Request) {
    return this.booksService.findAll(request.query);
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.booksService.findBook(bookId);
  }

  @Post()
  createBook(@Body() body) {
    const newBook: any = body;
    return this.booksService.createBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.booksService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() body) {
    const newBook: any = body;
    return this.booksService.updateBook(bookId, newBook);
  }
}
