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
import { BookDto } from './book.dto';
import { Book } from './book.class';
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  findAll(@Req() request: Request): Book[] {
    console.log(request.query);
    return this.booksService.findAll(request.query);
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string): Book {
    return this.booksService.findBook(bookId);
  }

  @Post()
  createBook(@Body() newBook: BookDto): Book {
    return this.booksService.createBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string): Book {
    return this.booksService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto) {
    return this.booksService.updateBook(bookId, newBook);
  }
}
